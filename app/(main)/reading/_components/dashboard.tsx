// "use client";

// import { useSession } from "next-auth/react";

// import StartForm from "./start-form";
// import StopForm from "./stop-form";

// const Dashboard = ({
//   bookId,
//   isStarted,
//   toggleIsStarted,
// }: {
//   bookId: string;
//   isStarted: boolean;
//   toggleIsStarted: () => void;
// }) => {
//   const { data } = useSession();

//   const email = data?.user?.email;

//   return (
//     <>
//       {isStarted ? (
//         <StopForm bookId={bookId} toggleIsStarted={toggleIsStarted}></StopForm>
//       ) : (
//         <StartForm
//           toggleIsStarted={toggleIsStarted}
//           bookId={bookId}
//         ></StartForm>
//       )}
//     </>
//   );
// };

// export default Dashboard;
