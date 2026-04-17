package com.lasindu.tasks.domain;

import com.lasindu.tasks.domain.entity.TaskPriority;
import com.lasindu.tasks.domain.entity.TaskStatus;
import java.time.LocalDate;

public record UpdateTaskRequest(
  String title,
  String description,
  LocalDate dueDate,
  TaskStatus status,
  TaskPriority priority
) {

}
