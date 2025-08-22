import puppeteer from 'puppeteer'

const TARGET = 'https://www.myflowfoundationke.org/'
const SELECTORS = ['html','body','p','a','nav','h1','h2','h3','h4','h5','h6','button']

function normalizeFamily(family) {
  return (family || '')
    .split(',')
    .map(s => s.trim().replace(/^"|"$/g, ""))
    .join(', ')
}

function normalizeWeight(w) {
  const n = parseInt(w, 10)
  if (Number.isNaN(n)) return 400
  return n
}

const groupMap = new Map()

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox'] })
try {
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(90000)
  page.setDefaultTimeout(90000)
  try {
    await page.goto(TARGET, { waitUntil: 'networkidle2', timeout: 90000 })
  } catch (e) {
    console.error('Navigation failed:', e && e.message)
    // Try a simpler wait condition
    await page.goto(TARGET, { waitUntil: 'domcontentloaded', timeout: 90000 })
  }
  await page.waitForSelector('body')

  const samples = await page.evaluate((sels) => {
    const out = []
    for (const sel of sels) {
      const els = Array.from(document.querySelectorAll(sel))
      for (let i = 0; i < Math.min(5, els.length); i++) {
        const el = els[i]
        const cs = getComputedStyle(el)
        out.push({ selector: sel, family: cs.fontFamily, weight: cs.fontWeight })
      }
    }
    return out
  }, SELECTORS)

  for (const s of samples) {
    const family = normalizeFamily(s.family)
    const weight = normalizeWeight(s.weight)
    const key = family
    if (!groupMap.has(key)) groupMap.set(key, new Set())
    groupMap.get(key).add(weight)
  }

  const entries = Array.from(groupMap.entries()).map(([family, weights]) => ({ family, weights: Array.from(weights).sort() }))

  const result = {
    families: entries,
  }

  // Heuristic: first family as body, second as heading if present
  if (entries.length) {
    result.body = { family: entries[0].family, weights: entries[0].weights }
    if (entries[1]) result.heading = { family: entries[1].family, weights: entries[1].weights }
  }

  console.log(JSON.stringify(result, null, 2))
} finally {
  await browser.close()
}


