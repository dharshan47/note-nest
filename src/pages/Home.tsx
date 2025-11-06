import NoteInput from "@/components/NoteInput";
import NoteList from "@/components/NoteList";

const Home = () => {
  return (
    <div className="max-w-screen-sm flex flex-col justify-center items-center bg-gray-50 rounded-md shadow-lg border-2 font-mono px-4 py-8 space-y-4 mx-auto w-full ">
      <div className="w-full space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold text-center">Note Nest</h1>
        <div className="bg-white shadow-lg rounded-md p-6">
          <NoteInput />
        </div>
        <NoteList />
      </div>
    </div>
  );
};

export default Home;
