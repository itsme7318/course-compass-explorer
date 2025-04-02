
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import KeywordSuggestions from "@/components/KeywordSuggestions";
import courses, { Course } from "@/data/courses";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  
  // Popular keywords for suggestions
  const popularKeywords = [
    "Python", "JavaScript", "Web Development", "Machine Learning", 
    "Cloud", "AWS", "Cybersecurity", "IT Support", "5G", "Networking",
    "Telecom", "DevOps", "Blockchain", "Java", "SQL", "Data Science"
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
    <div className="container mx-auto p-4">
      <header className="flex flex-col items-center justify-center text-center py-12 mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Course Compass Explorer</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover and compare online courses from top platforms. Find the perfect learning path for your goals.
        </p>
        
        <form onSubmit={handleSearch} className="flex w-full max-w-xl mt-8 relative">
          <Input
            type="text"
            placeholder="Search for courses, topics, or skills..."
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="icon" className="absolute right-0 top-0">
            <Search className="h-4 w-4" />
          </Button>
        </form>
        
        <div className="w-full max-w-xl">
          <KeywordSuggestions 
            keywords={popularKeywords} 
            onKeywordClick={handleKeywordClick} 
          />
        </div>
      </header>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="w-full max-w-lg mx-auto grid grid-cols-4">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="free">Free</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant={course.free ? "secondary" : "default"}>
                      {course.free ? "Free" : "Paid"}
                    </Badge>
                  </div>
                  <CardDescription>
                    {course.platform} • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(course.rating))}
                      {"☆".repeat(5 - Math.floor(course.rating))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{course.rating}/5</span>
                  </div>
                  <p className="font-semibold">{course.price}</p>
                  <Badge className="mt-2" variant="outline">{course.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="free" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.filter(course => course.free).map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="secondary">Free</Badge>
                  </div>
                  <CardDescription>
                    {course.platform} • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(course.rating))}
                      {"☆".repeat(5 - Math.floor(course.rating))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{course.rating}/5</span>
                  </div>
                  <p className="font-semibold">{course.price}</p>
                  <Badge className="mt-2" variant="outline">{course.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="paid" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.filter(course => !course.free).map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge>Paid</Badge>
                  </div>
                  <CardDescription>
                    {course.platform} • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(course.rating))}
                      {"☆".repeat(5 - Math.floor(course.rating))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{course.rating}/5</span>
                  </div>
                  <p className="font-semibold">{course.price}</p>
                  <Badge className="mt-2" variant="outline">{course.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="popular" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.filter(course => course.rating > 4.6).map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant={course.free ? "secondary" : "default"}>
                      {course.free ? "Free" : "Paid"}
                    </Badge>
                  </div>
                  <CardDescription>
                    {course.platform} • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(course.rating))}
                      {"☆".repeat(5 - Math.floor(course.rating))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{course.rating}/5</span>
                  </div>
                  <p className="font-semibold">{course.price}</p>
                  <Badge className="mt-2" variant="outline">{course.category}</Badge>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Course</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
