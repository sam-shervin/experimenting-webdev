const userPage = ({ params }: { params: { user: string } }) => {
  const myName = "sam";
  return (
    <>
      <section className="">
      </section>
      <section>{params.user}</section>
    </>
  );
};
export default userPage;
