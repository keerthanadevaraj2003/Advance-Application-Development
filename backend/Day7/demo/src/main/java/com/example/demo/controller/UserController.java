package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserDto;
import com.example.demo.Services.UserService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
public class UserController {

    private UserService userService;

    // Build Add Employee REST API
    @PostMapping("/create")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserId(@PathVariable("id") Long userId) {
        UserDto userDto = userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    // Build Get All Employee REST API
    @GetMapping("/all")
    public ResponseEntity<List<UserDto>> getAllUSer() {
        List<UserDto> users = userService.getAllUser();
        return ResponseEntity.ok(users);
    }

}
