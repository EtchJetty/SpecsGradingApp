'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var answerSchema = Schema( {
  studentId: ObjectId,
  courseId: {type:ObjectId,index:true},
  psetId: ObjectId,
  problemId: {type:ObjectId,index:true},
  answer: String,
  reviewers: [Schema.Types.ObjectId],
  numReviews: Number,
  pendingReviewers: [Schema.Types.ObjectId],
  createdAt: Date,
  // when a TA reviews an answer, it becomes
  // the official review and
  // the review, points, skills mastered are
  // copied here. We may need to be careful
  // when a TAs review is deleted to clear these.
  officialReviewId: Schema.Types.ObjectId,
  review: String,
  points: Number,
  skills:[ObjectId],
} );

module.exports = mongoose.model( 'Answer', answerSchema );
