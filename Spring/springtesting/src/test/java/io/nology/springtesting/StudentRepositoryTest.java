package io.nology.springtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
//Unit tests for StudentRepository
public class StudentRepositoryTest {
	@Autowired
	private StudentRepository underTest;
	
	@AfterEach
	void tearDown() {
		underTest.deleteAll();
	}
	
	@Test
	void itShouldCheckWhenStudentEmailExists() {
		String email = "calum@gmail.com";
		Student student = new Student(
			"Calum",
			email,
			Student.Gender.MALE
		);
				
		underTest.save(student);
		
		boolean received = underTest.selectExistsEmail(email);
		assertThat(received).isTrue();

	}
	
	@Test
	void existsByEmailShouldReturnFalseWhenEmailDoesntExist() {
		String email = "calum@gmail.com";
		boolean received = underTest.selectExistsEmail(email);
		assertThat(received).isFalse();
	}
	
	@Test 
	void selectCountShouldReturnTheRightCountOfRecord() {
		String email1 = "calum@gmail.com";
		Student student1 = new Student(
			"Calum",
			email1,
			Student.Gender.MALE
		);
		
		underTest.save(student1);
		
		Integer received = underTest.selectCount();
		
		assertThat(received).isEqualTo(1);
	}
}
