import { Card, Button, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import TechVideo from "../../public/video.mp4";

interface ArticleCardProps {
  title: string;
  description: string;
  link: string;
}

const HomePage: React.FC = () => {

  return <>
    <main className="container mx-auto px-6 py-12">
      <section className="relative py-10 px-6 text-center rounded-xl h-[400px]">
        {/* Video Background */}
        <video
          className="absolute object-cover w-full h-[400px] top-0 left-0 z-10 blur-[2px] object-[50%_30%] rounded-xl"
          autoPlay
          loop
          muted
        >
          <source src={TechVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="max-w-3xl mx-auto z-10 relative bg-gray-900/30 rounded-xl">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Exploring the Future of Technology
          </h1>
          <p className="text-lg text-gray-300">
            Welcome to TechFrontier, your gateway to the latest breakthroughs and trends in technology.
            From cutting-edge AI innovations to groundbreaking gadgets, we dive deep into the world
            of tech to keep you informed and inspired. Join us as we explore how technology is shaping the
            future and transforming our lives.
          </p>
        </div>
      </section>

      <h3 className="text-2xl font-semibold mb-6">Latest Tech Posts</h3>
      <Card className=" flex flex-row">
        <ArticleCard
          title="AI Tools Revolutionizing 2024"
          description="From ChatGPT updates to new AI development frameworks, discover what’s next in artificial intelligence."
          link="/post/ai-tools-2024"
        />
        <ArticleCard
          title="The Future of Web3"
          description="Explore the next generation of decentralized internet and its implications for developers."
          link="/post/future-of-web3"
        />
        <ArticleCard
          title="React Server Components Explained"
          description="Understand the impact of React's new server components on performance and usability."
          link="/post/react-server-components"
        />
      </Card>
    </main>

    {/* Footer */}
    <div>
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 TechFrontier. All rights reserved.</p>
      </footer>
    </div >
  </>
};

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, link }) => (
  <div >
    <Card isHoverable isPressable>
      {/* <CardHeader> */}
      <CardHeader >{title}</CardHeader>
      {/* </CardHeader> */}
      <CardBody>
        <CardBody>{description}</CardBody>
      </CardBody>
      <CardFooter>
        <Button
          as="a"
          href={link}
          color="primary"
          size="sm"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  </div>
)

export default HomePage;