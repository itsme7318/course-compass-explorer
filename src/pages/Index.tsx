
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      platform: "Coursera",
      price: "$49.99",
      rating: 4.7,
      duration: "6 weeks",
      free: false,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      platform: "Udemy",
      price: "$89.99",
      rating: 4.8,
      duration: "12 weeks",
      free: false,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      platform: "edX",
      price: "Free",
      rating: 4.5,
      duration: "8 weeks",
      free: true,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=60"
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="flex flex-col items-center justify-center text-center py-12 mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Course Compass Explorer</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover and compare online courses from top platforms. Find the perfect learning path for your goals.
        </p>
        
        <div className="flex w-full max-w-xl mt-8 relative">
          <Input
            type="text"
            placeholder="Search for courses, topics, or skills..."
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button size="icon" className="absolute right-0 top-0">
            <Search className="h-4 w-4" />
          </Button>
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
            {courses.map((course) => (
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
            {courses.filter(course => course.free).map((course) => (
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
            {courses.filter(course => !course.free).map((course) => (
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
            {courses.filter(course => course.rating > 4.6).map((course) => (
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
