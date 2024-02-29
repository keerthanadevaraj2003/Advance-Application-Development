package com.example.demo.Services;

import java.util.List;

import com.example.demo.dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUser();
}
