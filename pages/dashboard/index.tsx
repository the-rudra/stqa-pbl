import type { NextPage } from "next";
import { PageContainer } from "@features/layout";
import { ProjectList } from "@features/projects";

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Dashboard"
      info="Welcome to your dashboard! Here you can see and manage your deployed website."
    >
      <ProjectList />
    </PageContainer>
  );
};

export default Home;
