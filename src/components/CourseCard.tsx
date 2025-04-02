
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Course } from '@/data/courses';
import coursePlaylists from '@/data/coursePlaylists';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Find the playlist for this course
  const playlist = coursePlaylists.find(p => p.courseId === course.id);
  
  // Provide a default description if none exists
  const courseDescription = course.description || "Master in-demand skills with this comprehensive course designed for beginners and professionals alike.";
  
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
        return "https://www.google.com/search?q=" + encodeURIComponent(`${course.title} ${platform} course`);
    }
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col h-full border border-gray-100">
      <div className="relative">
        <img 
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className={course.free ? "bg-green-500 hover:bg-green-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}>
            {course.free ? "Free" : "Premium"}
          </Badge>
        </div>
      </div>
      
      <div className="p-5 flex flex-col h-full">
        <Badge className="w-fit mb-2" variant="outline">{course.category}</Badge>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{course.title}</h3>
        
        <div className="flex items-center mb-3 text-sm text-gray-600">
          <span className="mr-3">{course.platform}</span>
          <span>•</span>
          <span className="flex items-center ml-3">
            <Clock size={14} className="mr-1" /> {course.duration}
          </span>
        </div>
        
        {playlist && (
          <div className="flex items-center mb-3 text-sm text-blue-600">
            <Video size={14} className="mr-1" /> 
            <a href={playlist.playlistUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              YouTube Playlist ({playlist.videoCount} videos)
              <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
        )}
        
        <div className="flex items-center my-2">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(course.rating))}
            {"☆".repeat(5 - Math.floor(course.rating))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{course.rating}/5</span>
        </div>
        
        <p className="text-gray-700 text-sm flex-grow">{courseDescription}</p>
        
        <div className="mt-4 flex space-x-2">
          <Link to={`/course/${course.id}`} className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
              View Details
            </Button>
          </Link>
          <a href={getPlatformUrl(course.platform)} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium">
              Enroll
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
