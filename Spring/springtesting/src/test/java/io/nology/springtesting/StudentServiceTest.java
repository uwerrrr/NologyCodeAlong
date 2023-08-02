package io.nology.springtesting;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
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
		
		Mockito.verify(studentRepository).findAll(); // see findAll() method has been called ?
	}
	
	@Test
	void isShouldAddStudent() {
		String email = "calum@gmail.com";
		Student student = new Student(
				"Calum",
				email,
				Student.Gender.MALE);
		
		
		// simulate we don't have existed email
		BDDMockito.given(studentRepository.selectExistsEmail(ArgumentMatchers.anyString()))
			.willReturn(false);
		
		Assertions.assertThatThrownBy(() -> underTest.addStudent(student))
			.isInstanceOf(BadRequestException.class)
			.hasMessage("Email " + student.getEmail() + " taken");
		
	}
	
	@Test
	void itShouldAddStudent() {
		String email = "calum@gmail.com";
		Student student = new Student(
				"Calum",
				email,
				Student.Gender.MALE);
		BDDMockito.given(studentRepository.selectExistsEmail(ArgumentMatchers.anyString()))
			.willReturn(false);
		
		underTest.addStudent(student);
		
		ArgumentCaptor<Student> studentArgument = ArgumentCaptor.forClass(Student.class);
		
		Mockito.verify(studentRepository).save(studentArgument.capture()); 
		
		Assertions.assertThat(studentArgument.getValue())
			.isEqualTo(student);
		Assertions.assertThat(studentArgument.getValue()).getEmail()
			.isEqualTo(student.getEmail());
		
//		Assertions.assertThatThrownBy
	}
	
	@Test
	void isShouldDeleteStudentIfIdExists() {
		Long id = 123l;
		
		// simulate we have existed id
		BDDMockito.given(studentRepository.existsById(ArgumentMatchers.anyLong()))
			.willReturn(true); 
		
		underTest.deleteStudent(id);
		
		ArgumentCaptor<Long> idArgument = ArgumentCaptor.forClass(Long.class); // capture the argument of the method
		
		Mockito.verify(studentRepository).deleteById(idArgument.capture());
		
		
		Assertions.assertThat(idArgument.getValue()).isEqualTo(id);
		
	}
	
	
	@Test
	void isShouldNotDeleteStudentIfDoesntExist() {
		Long id = 123l;
		
		
		
		
		
	}
	
}
