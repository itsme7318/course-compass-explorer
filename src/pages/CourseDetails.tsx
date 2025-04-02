
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Video, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import courses from '@/data/courses';
import coursePlaylists from '@/data/coursePlaylists';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState(courses.find(c => c.id === Number(id)));
  const playlist = coursePlaylists.find(p => p.courseId === course?.id);

  // Map course platforms to their respective URLs
  const getPlatformUrl = (platform: string) => {
    switch (platform) {
      case "Coursera":
        return "https://www.coursera.org";
      case "Udemy":
        return "https://www.udemy.com";
      case "edX":
        return "https://www.edx.org";
      case "Pluralsight":
        return "https://www.pluralsight.com";
      case "AWS Training":
        return "https://aws.amazon.com/training";
      case "LinkedIn Learning":
        return "https://www.linkedin.com/learning";
      case "Cybrary":
        return "https://www.cybrary.it";
      case "Qualcomm Academy":
        return "https://www.qualcomm.com";
      case "MIT OpenCourseWare":
        return "https://ocw.mit.edu";
      case "Yonsei University":
        return "https://www.yonsei.ac.kr/en_sc/";
      case "École Polytechnique Fédérale de Lausanne":
        return "https://www.epfl.ch/en/";
      case "Institut Mines-Télécom":
        return "https://www.imt.fr/en/";
      default:
        return "https://www.google.com/search?q=" + encodeURIComponent(`${course?.title} ${platform} course`);
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <Link to="/">
          <Button>Back to Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Badge className={course.free ? "bg-green-500 text-white mb-4" : "bg-blue-500 text-white mb-4"}>
                {course.free ? "Free Course" : "Premium Course"}
              </Badge>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-xl mb-6">
                {course.description || "Master in-demand skills with this comprehensive course designed for beginners and professionals alike."}
              </p>
              
              <div className="flex flex-wrap gap-y-3 gap-x-6 mb-8">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  <span>{course.platform}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="flex text-yellow-300 mr-2">
                    {"★".repeat(Math.floor(course.rating))}
                    {"☆".repeat(5 - Math.floor(course.rating))}
                  </span>
                  <span>{course.rating}/5</span>
                </div>
              </div>
              
              {playlist && (
                <div className="rounded-lg bg-white/10 p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Video className="mr-2 h-5 w-5" />
                    <h3 className="text-lg font-medium">YouTube Playlist</h3>
                  </div>
                  <p className="mb-4">This course includes {playlist.videoCount} videos to help you master the material.</p>
                  <a 
                    href={playlist.playlistUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-blue-800 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    Watch Playlist
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={getPlatformUrl(course.platform)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    Enroll Now
                  </Button>
                </a>
                
                {playlist && (
                  <a
                    href={playlist.playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Watch Videos
                    </Button>
                  </a>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What you'll learn</h3>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Understand core {course.category} principles
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Apply practical skills in real-world scenarios
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Master industry-standard technologies
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete hands-on projects and exercises
                  </li>
                </ul>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <a 
                    href={getPlatformUrl(course.platform)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                      Start Learning Today
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Course Content</h2>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <ul className="space-y-4">
            {[1, 2, 3, 4].map((module) => (
              <li key={module} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg">Module {module}: {["Introduction", "Core Concepts", "Advanced Techniques", "Practical Applications"][module-1]}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
                    <ul className="pl-4 space-y-2">
                      {[1, 2, 3].map((lesson) => (
                        <li key={lesson} className="flex items-center">
                          <Video className="h-4 w-4 mr-2 text-blue-600" /> Lesson {lesson}: Example Lesson Title
                          <span className="ml-auto text-sm text-gray-500">15 min</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
