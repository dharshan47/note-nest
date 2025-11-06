import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

interface Note {
  id: string;
  content: string;
}

const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    const unSubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Note[];
      setNotes(notesData);
    });
    return () => unSubscribe();
  }, []);

  const deleteNote = async (id: string) => {
    await deleteDoc(doc(db, "notes", id));
    toast.success("Notes Deleted");
  };

  return (
    <div
      className={`grid gap-4 mt-4 ${
        notes.length === 1 ? "grid-cols-1 " : "grid-cols-1 md:grid-cols-2"
      }`}
    >
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-5 border border-gray-200 bg-white flex justify-between items-center transistion-all duration-200 rounded-xl shadow-md hover:shadow-lg"
        >
          <p className="text-base text-gray-800">{note.content}</p>
          <Button variant="destructive" onClick={() => deleteNote(note.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
