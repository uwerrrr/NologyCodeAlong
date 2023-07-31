package nology.io.portfoliobackend.post;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service // identyify this is service layer
@Transactional // each database updating request is a transaction
public class PostService {
	
	// dependency injection
	@Autowired
	private PostRepository postRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public Post create(CreatePostDTO data) {
		// Business logic: trim all string coming from data
		
//		// 1. clean up data
//		String postTitle = data.getTitle().trim();
//		String postContent = data.getContent().trim();
//		String postCategory = data.getCategory().trim();
//		Date postCreatedDate = new Date();
//		
//		// 2. set new post
//		Post newPost = new Post(postTitle,postCategory, postContent, postCreatedDate);
//		
//		// 3. save new post
//		Post createdPost = this.postRepository.save(newPost);
		
		
		// create with model mapper -> don't need to clean & set post for each properties
		// really good for large project
		
		Post newPost = modelMapper.map(data, Post.class);
			// modelMapper.map(source, destination)
		newPost.setCreatedAt(new Date());
		Post createdPost = this.postRepository.save(newPost);
		
		return createdPost;
	}
	
	// find all posts service
	public List<Post> findAll(){
		return this.postRepository.findAll();
		// .findAll(): Returns all instances of the type.
			// returns empty array if none is found
	}
	
	// find post by id service
	public Optional<Post> findById(Long id){
		Optional<Post> maybePost = this.postRepository.findById(id);
		// .findById(): Returns Optional: an entity by its id.
		return maybePost;
		
		
	}
	
	// delete post by id service
	// return boolean for success delete or not
	public boolean deleteById(Long id){
		Optional<Post> maybePost = this.findById(id);
		
		if (maybePost.isEmpty()) {
			return false;
		}
		this.postRepository.delete(maybePost.get());
		// .delete(): Deletes a given entity.
		
		return true;
		
	}
	
	// update post by id service
	// return updated post for success update
	public Optional<Post> updateById(Long id, UpdatePostDTO data){
		
		Optional<Post> maybePost = this.findById(id);
		
		if (maybePost.isPresent()) {
			Post existingPost = maybePost.get();
			
			modelMapper.map(data, existingPost);
			
			return Optional.of(this.postRepository.save(existingPost));
		}
		
		return maybePost;
		// return original post if can't update
		
	}
	
	
}
