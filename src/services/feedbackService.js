import { nanoid } from "@reduxjs/toolkit";
import {
	Timestamp,
	addDoc,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	orderBy,
	updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const getOneFeedbackRef = async (id) => {
	const feedbackRef = doc(db, "feedbacks", id);
	const feedSnap = await getDoc(feedbackRef);
	return feedSnap;
};

const getCollectionRef = () => {
	const collectionRef = collection(db, "feedbacks");
	return collectionRef;
};

const addNewFeedback = async (feedback) => {
	const collectionRef = getCollectionRef();
	await addDoc(collectionRef, feedback);
};

const deleteFeedback = async (id) => {
	await deleteDoc(doc(db, "feedbacks", id));
};

const getAllFeedbacks = async () => {
	const querySnapshot = await getDocs(
		collection(db, "feedbacks"),
		orderBy("createdAt", "desc")
	);
	const feedbacks = [];

	querySnapshot.forEach((doc) => {
		feedbacks.push({ ...doc.data(), id: doc.id });
	});
	return feedbacks;
};

const updateFeedback = async (id, state) => {
	const feedbackRef = doc(db, "feedbacks", id);
	await updateDoc(feedbackRef, state);
};

const updateComment = async (id, user, comment) => {
	const commentRef = doc(db, "feedbacks", id);
	await updateDoc(commentRef, {
		comments: arrayUnion({
			photo: user.photoURL,
			createdBy: user.displayName,
			content: comment,
			createdAt: Timestamp.now().toDate(),
			commentId: nanoid(),
		}),
	});
};

export default {
	getOneFeedbackRef,
	getCollectionRef,
	addNewFeedback,
	deleteFeedback,
	getAllFeedbacks,
	updateFeedback,
	updateComment,
};
