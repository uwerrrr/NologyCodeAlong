package nology.io.portfoliobackend.post;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UpdatePostDTO {
	
//	@Size(min = 1) // minimum 1 char
		// null elements are considered valid.
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String title;
	
//	@Size(min = 1) // minimum 1 char
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space
	String category;

//	@Size(min = 1) // minimum 1 char
	@Pattern(regexp = "^(?=\\S).*$", message="Content cannot be an empty string") // should not content only white space 
	String content;
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}
