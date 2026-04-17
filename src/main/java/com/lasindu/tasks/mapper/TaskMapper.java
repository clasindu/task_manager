package com.lasindu.tasks.mapper;

import com.lasindu.tasks.domain.CreateTaskRequest;
import com.lasindu.tasks.domain.UpdateTaskRequest;
import com.lasindu.tasks.domain.dto.CreateTaskRequestDto;
import com.lasindu.tasks.domain.dto.TaskDto;
import com.lasindu.tasks.domain.dto.UpdateTaskRequestDto;
import com.lasindu.tasks.domain.entity.Task;

public interface TaskMapper {

  CreateTaskRequest fromDto(CreateTaskRequestDto dto);

  UpdateTaskRequest fromDto(UpdateTaskRequestDto dto);

  TaskDto toDto(Task task);

}
