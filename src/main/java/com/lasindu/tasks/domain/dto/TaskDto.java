package com.lasindu.tasks.domain.dto;

import com.lasindu.tasks.domain.entity.TaskPriority;
import com.lasindu.tasks.domain.entity.TaskStatus;
import java.time.LocalDate;
import java.util.UUID;

public record TaskDto(
  UUID id,
  String title,
  String description,
  LocalDate dueDate,
  TaskPriority priority,
  TaskStatus status
) {

}
