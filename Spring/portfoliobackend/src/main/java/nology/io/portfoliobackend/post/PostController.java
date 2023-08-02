package nology.io.portfoliobackend.post;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import nology.io.portfoliobackend.exception.NotFoundException;

@RestController
@RequestMapping("/posts")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	// customize the response of post request
	// I am returning ResponseEntity because I want to have control over what status code gets returned as part of HTTP response
	// ResponseEntity: Extension of HttpEntity that adds an HttpStatusCode status code. Used in RestTemplate as well as in @Controller methods.
	

	
	// POST
//	@PostMapping
//	public void createPost(@Valid @RequestBody CreatePostDTO data){
//		// automatically map json keys with data properties
//		// @RequestBody: parameter from body of the web request.
//		// @Valid: error when sent data is not correct, based on defined in CreatePostDTO class
//		System.out.println("data.category:" + data.category);
//		this.postService.create(data);
//		
//	}
	
	@PostMapping
	public ResponseEntity <Post> createPost(@Valid @RequestBody CreatePostDTO data){
		// automatically map json keys with data properties
		// @RequestBody: parameter from body of the web request.
		// @Valid: error when sent data is not correct, based on defined in CreatePostDTO class
		Post createdPost = this.postService.create(data);
		return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
		
		// ResponseEntity<>(response content, response http status code);
	}
	
	
	// GET
	@GetMapping
	public ResponseEntity<List<Post>> getAll(){
		List<Post> allPosts = this.postService.findAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Post> getById(@PathVariable Long id){
		Optional<Post> foundPost = this.postService.findById(id);
		
		if (foundPost.isEmpty()) {
			throw new NotFoundException(String.format("Post with id: %s not found", id));
		}
		return new ResponseEntity<>(foundPost.get(), HttpStatus.OK);
	}
	
	
	// DELLETE
	// return 204 - success, no content
	@DeleteMapping("/{id}")
	public ResponseEntity<Post> deleteById(@PathVariable Long id){
		boolean postDeleted = this.postService.deleteById(id);
		// this.postService.deleteId(id);
		
		if (!postDeleted) {
			throw new NotFoundException(String.format("Post with id: %s not found, could not be deleted", id));
		}
		
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
	
	
	// PATCH (update)
	@PatchMapping("/{id}")
	public ResponseEntity<Post> updateById(@PathVariable Long id, @Valid @RequestBody UpdatePostDTO data){
		
		Optional<Post> maybeUpdated = this.postService.updateById(id, data);
		if(maybeUpdated.isEmpty()) {
			throw new NotFoundException(String.format("Post with id: %s not found, could not be updated", id));
		}
		
		return new ResponseEntity<Post>(maybeUpdated.get(), HttpStatus.OK);
	}
	
	
}
