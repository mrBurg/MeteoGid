import { Content } from '@/components/Content';

export default function Page() {
  return <Content />;
}

/* const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?q=Odesa&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const { main } = await data.json();

      setPosts(main);
    };

    fetchPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  } */
/* const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?q=Odesa&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const {
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      sea_level,
      grnd_level,
    },
  } = await data.json(); */
