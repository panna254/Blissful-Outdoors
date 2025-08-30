import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const workSessions = [
  {
    id: 1,
    title: "Landscaping Transformation Project",
    description: "Watch our team transform a residential garden from start to finish",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "12:45",
    category: "Landscaping"
  },
  {
    id: 2,
    title: "Cabro Paving Installation Process",
    description: "Step-by-step cabro installation for a commercial driveway",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "8:30",
    category: "Paving"
  },
  {
    id: 3,
    title: "Car Shade Structure Assembly",
    description: "Professional installation of modern car parking shades",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "15:20",
    category: "Shade Solutions"
  },
  {
    id: 4,
    title: "Pergola Construction Timelapse",
    description: "Complete pergola build showcasing our craftsmanship",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "10:15",
    category: "Outdoor Structures"
  }
];

const WorkSessionVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Watch Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and professionalism of Blissful Outdoors through our work session videos
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {workSessions.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
              onClick={() => openVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-green-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-700 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {video.description}
                </p>
                
                <div className="flex items-center text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Watch Video</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more of our work? Visit our YouTube channel for complete project walkthroughs.
          </p>
          <a
            href="https://youtube.com/@blissfuloutdoors" // Replace with actual YouTube channel
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit Our YouTube Channel
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeVideo}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-green-700">{selectedVideo.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{selectedVideo.description}</p>
                </div>
                <button
                  onClick={closeVideo}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Embed */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSessionVideos;
