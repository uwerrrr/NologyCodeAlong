package io.nology.springtesting;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.Mock; // Import the Mock annotation from Mockito
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;


@ExtendWith(MockitoExtension.class)
public class StudentServiceTest {
	@Mock
	private StudentRepository studentRepository;
	
	private StudentService underTest;
	
	@BeforeEach
	void setUp() {
		this.underTest = new StudentService(studentRepository);
	}
	
	@Test
	void getAllStudentsShouldCallFindAll() {
		underTest.getAllStudents();
		
		Mockito.verify(studentRepository).findAll();
	}
	
	@Test
	void isShouldNotAddStudent() {
		String email = "calum@gmail.com";
		Student student = new Student(
			"Calum",
			email,
			Student.Gender.MALE
		);
		
		BDDMockito.given(studentRepository.selectExistsEmail(ArgumentMatchers.anyString()))
			.willReturn(true); 
			// hard set selectExistsEmail() -> returns true
		
		// Test whether throw exception
		Assertions.assertThatThrownBy(() -> underTest.addStudent(student))
			.isInstanceOf(BadRequestException.class)
			.hasMessage("Email " + student.getEmail() + " taken");
			
	}
	
	@Test
	void itShouldAddStudent() {
		Student student = new Student(
			"Calum",
			"calum@gmail.com",
			Student.Gender.MALE
		);
		
		BDDMockito.given(studentRepository.selectExistsEmail(ArgumentMatchers.anyString()))
			.willReturn(false);
		
		underTest.addStudent(student);
		
		ArgumentCaptor<Student> studentArgument =
				ArgumentCaptor.forClass(Student.class);
		
		Mockito.verify(studentRepository).save(studentArgument.capture());
		
		Assertions.assertThat(studentArgument.getValue()).isEqualTo(student);
		Assertions.assertThat(studentArgument.getValue().getEmail())
			.isEqualTo(student.getEmail());
		
	}
	
	@Test
	void isShouldDeleteStudentIfIdExists() {
		Long id = 123l;
		
		BDDMockito.given(studentRepository.existsById(ArgumentMatchers.anyLong()))
			.willReturn(true);
		
		underTest.deleteStudent(id);
		
		
		ArgumentCaptor<Long> idArgument
			= ArgumentCaptor.forClass(Long.class);
		
		// test whether deleteById is executed
		Mockito.verify(studentRepository).deleteById(idArgument.capture());
		
		
		Assertions.assertThat(idArgument.getValue()).isEqualTo(id);
	}
	
	@Test
	void isShouldNotDeleteStudentIfIdDoesntExist() {
		Long id = 123l;
		
		BDDMockito.given(studentRepository.existsById(id))
			.willReturn(false);
		
		Assertions.assertThatThrownBy(() -> underTest.deleteStudent(id))
			.isInstanceOf(StudentNotFoundException.class)
			.hasMessage("Student with id " + id + " does not exists");
		
	}
	
}
