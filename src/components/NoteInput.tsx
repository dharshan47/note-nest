import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";

const NoteInput = () => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!note.trim()) {
      toast.error('Please fill your note')
    } else {
      setLoading(true);
      await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: serverTimestamp(),
      });
      setNote("");
      setLoading(false);
      toast.success("Notes Added");
    }
  };

  return (
    <div className="space-y-4">
      <Input
        className="w-full"
        placeholder="Enter your notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Button className="w-full" disabled={loading} onClick={handleSave}>
        {loading ? "Saving..." : "Save Note"}
      </Button>
    </div>
  );
};

export default NoteInput;
