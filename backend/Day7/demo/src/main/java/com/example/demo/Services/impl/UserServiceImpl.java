package com.example.demo.Services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;
import com.example.demo.exception.UserException;
import com.example.demo.mapper.UserMapper;
import com.example.demo.repository.UserRepo;
import com.example.demo.Services.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepo userRepo;

    @Override
    public UserDto createUser(UserDto userdto) {

        User user = UserMapper.maptoUser(userdto);
        User savedUser = userRepo.save(user);
        return UserMapper.maptoUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(
                        () -> new UserException("User is not exist with given id : " + userId));

        return UserMapper.maptoUserDto(user);
    }

    @Override
    public List<UserDto> getAllUser() {
        List<User> users = userRepo.findAll();

        List<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(UserMapper.maptoUserDto(user));
        }

        return userDtos;
    }

}
