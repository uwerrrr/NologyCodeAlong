package nology.io.portfoliobackend.post;



import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

// create table "posts"
@Entity
@Table(name = "posts")
public class Post {
	
	// add primary key property (col)
	// similar to this sql querry: id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // ~ AUTO_INCREMENT from 1
	private Long id;
	
	// add other properties (other columns)
	
	@Column 
	// instead of having to create setter and getter methods for each property 
	// we can use @Setter and @Getter from Lombok library
	private String title; // no relationship yet
	
	@Column
	private String category;
	
	@Column
	private String content;
	
	@Column
	private Date createdAt;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	
//	 constructors of Post
	public Post() {}
	 
	public Post(String title, String category, String content, Date createdAt) {
		this.title = title;
		this.category = category;
		this.content = content;
		this.createdAt = createdAt;
	}
}
