const assignmentSchema = new Schema(
	{
	  title: {
		type: String,
		required: true,
		trim: true,
	  },
	  description: {
		type: String,
		trim: true,
	  },
	  course: {
		type: Schema.Types.ObjectId,
		ref: "Course", // Assignment belongs to a course
		required: true,
	  },
	  dueDate: {
		type: Date,
		required: true,
	  },
	  rubric: {
		type: String, // Optional: Can store rubric in JSON or Markdown format
	  },
	},
	{
	  timestamps: true,
	}
  );
  
  export const Assignment = mongoose.model("Assignment", assignmentSchema);
  