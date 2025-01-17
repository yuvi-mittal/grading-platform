const gradeSchema = new Schema(
	{
	  submission: {
		type: Schema.Types.ObjectId,
		ref: "Submission", // Reference to the submission
		required: true, 
	  },
	  ta: {
		type: Schema.Types.ObjectId,
		ref: "User", // Reference to the TA who graded the submission
		required: true, 
	  },
	  score: {
		type: Number, // Numeric grade
		required: true, 
		min: 0, 
		max: 100, 
	  },
	  feedback: {
		type: String, // Feedback comments
		trim: true,
	  },
	  reviewedByFaculty: {
		type: Boolean,
		default: false,
	  },
	  facultyComments: {
		type: String, // Comments added by faculty, if any
		trim: true, 
	  },
	},
	{
	  timestamps: true,
	}
  );
  
  export const Grade = mongoose.model("Grade", gradeSchema);
  