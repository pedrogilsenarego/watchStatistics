package com.watchstatistics.server.service;

import com.watchstatistics.server.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
