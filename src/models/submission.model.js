const submissionSchema = new Schema(
	{
	  student: {
		type: Schema.Types.ObjectId,
		ref: "User", // Reference to the ta who submitted
		required: true,
	  },
	  assignment: {
		type: Schema.Types.ObjectId,
		ref: "Assignment", // Reference to the assignment
		required: true,
	  },
	  file: {
		type: String, // File URL (e.g., stored on Cloudinary or other storage)
		required: true,
	  },
	  submittedAt: {
		type: Date,
		default: Date.now,
	  },
	  graded: {
		type: Boolean,
		default: false,
	  },
	},
	{
	  timestamps: true,
	}
  );
  
  export const Submission = mongoose.model("Submission", submissionSchema);
  