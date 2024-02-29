package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;

public class UserMapper {

    public static UserDto maptoUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword());
    }

    public static User maptoUser(UserDto userdto) {
        return new User(
                userdto.getId(),
                userdto.getFirstName(),
                userdto.getLastName(),
                userdto.getEmail(), 
                userdto.getPassword());
    }

}
