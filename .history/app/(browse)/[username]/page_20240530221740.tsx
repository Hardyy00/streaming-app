interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage: React.FC<UserPageProps> = async ({ params }) => {
  return <div>User : {params.username}</div>;
};

export default UserPage;
