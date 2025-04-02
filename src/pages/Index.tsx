
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import KeywordSuggestions from "@/components/KeywordSuggestions";
import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import courses, { Course } from "@/data/courses";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  
  // Popular keywords for suggestions
  const popularKeywords = [
    "Python", "JavaScript", "Web Development", "Machine Learning", 
    "Cloud", "AWS", "Cybersecurity", "IT Support", "5G", "Networking",
    "Telecom", "DevOps", "Blockchain", "Java", "SQL", "Data Science",
    "IoT", "TCP/IP", "VoIP", "Optical Fiber", "Wireless", "MPLS"
  ];
  
  // Filter courses based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCourses(courses);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = courses.filter(course => 
        course.title.toLowerCase().includes(lowercaseQuery) ||
        course.platform.toLowerCase().includes(lowercaseQuery) ||
        course.category.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredCourses(filtered);
    }
  }, [searchQuery]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  // Handle keyword suggestion click
  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-[#001B3D] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-bold mb-6">Learn telecom and IT skills</h1>
            <p className="text-xl mb-8">
              Master in-demand skills in telecommunications, networking, and IT through 
              interactive courses, real-world projects, and industry recognized certifications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-black bg-[#00EA64] hover:bg-[#00C853] font-medium text-lg py-6 px-8">
                Start Learning For Free
              </Button>
              
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                For Business
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative mb-6">
          <Input
            type="text"
            placeholder="Search for courses, topics, or skills..."
            className="pr-10 h-12 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="icon" className="absolute right-1 top-1 h-10 w-10">
            <Search className="h-4 w-4" />
          </Button>
        </form>
        
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-sm text-gray-600 mb-2">Popular Searches:</p>
          <KeywordSuggestions 
            keywords={popularKeywords} 
            onKeywordClick={handleKeywordClick} 
          />
        </div>

        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-5 mb-6">
            <TabsTrigger value="all" className="rounded-full">All Courses</TabsTrigger>
            <TabsTrigger value="telecom" className="rounded-full">Telecom</TabsTrigger>
            <TabsTrigger value="it" className="rounded-full">IT</TabsTrigger>
            <TabsTrigger value="free" className="rounded-full">Free</TabsTrigger>
            <TabsTrigger value="popular" className="rounded-full">Popular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="telecom" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter(course => course.category === "Telecommunications" || course.category === "Telecom")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="it" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter(course => course.category === "IT" || course.category === "Information Technology")
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="free" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter(course => course.free)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses
                .filter(course => course.rating > 4.5)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-10">
          <Link to="/login">
            <Button variant="outline" className="mx-auto">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
