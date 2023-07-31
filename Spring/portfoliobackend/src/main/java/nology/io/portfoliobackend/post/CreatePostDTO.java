package nology.io.portfoliobackend.post;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

// DTO: Data Transfer Object
public class CreatePostDTO {
	@NotBlank // element must NOT be null and must contain at least one non-whitespace character
	String title;
	
	@NotBlank
	String category;
	
	@NotBlank
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

	
	
	public CreatePostDTO(String title, String category, String content) {
		this.title = title;
		this.category = category;
		this.content = content;
	}
}
