package com.lasindu.tasks.mapper.impl;

import com.lasindu.tasks.domain.CreateTaskRequest;
import com.lasindu.tasks.domain.UpdateTaskRequest;
import com.lasindu.tasks.domain.dto.CreateTaskRequestDto;
import com.lasindu.tasks.domain.dto.TaskDto;
import com.lasindu.tasks.domain.dto.UpdateTaskRequestDto;
import com.lasindu.tasks.domain.entity.Task;
import com.lasindu.tasks.mapper.TaskMapper;
import org.springframework.stereotype.Component;

@Component
public class TaskMapperImpl implements TaskMapper {

  @Override
  public CreateTaskRequest fromDto(CreateTaskRequestDto dto) {
    return new CreateTaskRequest(
      dto.title(),
      dto.description(),
      dto.dueDate(),
      dto.priority()
    );
  }

  @Override
  public UpdateTaskRequest fromDto(UpdateTaskRequestDto dto) {
    return new UpdateTaskRequest(
      dto.title(),
      dto.description(),
      dto.dueDate(),
      dto.status(),
      dto.priority()
    );
  }

  @Override
  public TaskDto toDto(Task task) {
    return new TaskDto(
      task.getId(),
      task.getTitle(),
      task.getDescription(),
      task.getDueDate(),
      task.getPriority(),
      task.getStatus()
    );
  }

}
