export const getUserByUsername = async (username: string) => {
  try {
    const user = await prisma?.user.findUnique({
      where: {
        username,
      },
    });

    return user;
  } catch (err) {}
};
