
interface CoursePlaylist {
  courseId: number;
  playlistUrl: string;
  videoCount: number;
}

// Mock YouTube playlist URLs for each course
const coursePlaylists: CoursePlaylist[] = [
  // Telecommunication Courses
  { courseId: 101, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 24 },
  { courseId: 102, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 18 },
  { courseId: 103, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 12 },
  { courseId: 104, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 15 },
  { courseId: 105, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 20 },
  { courseId: 106, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 16 },
  { courseId: 107, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 14 },
  { courseId: 108, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 10 },
  { courseId: 109, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 22 },
  { courseId: 110, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 25 },
  { courseId: 111, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 18 },
  { courseId: 112, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 15 },
  { courseId: 113, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 12 },
  { courseId: 114, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 14 },
  { courseId: 115, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx", videoCount: 16 },
  
  // IT Courses
  { courseId: 201, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 30 },
  { courseId: 202, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 24 },
  { courseId: 203, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 20 },
  { courseId: 204, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 18 },
  { courseId: 205, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 22 },
  { courseId: 206, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 16 },
  { courseId: 207, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 28 },
  { courseId: 208, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 32 },
  { courseId: 209, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 26 },
  { courseId: 210, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 20 },
  { courseId: 211, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 18 },
  { courseId: 212, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 24 },
  { courseId: 213, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 30 },
  { courseId: 214, playlistUrl: "https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ", videoCount: 22 },
  { courseId: 215, playlistUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y", videoCount: 16 },
];

export default coursePlaylists;
