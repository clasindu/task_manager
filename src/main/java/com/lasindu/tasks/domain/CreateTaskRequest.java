package com.lasindu.tasks.domain;

import com.lasindu.tasks.domain.entity.TaskPriority;
import java.time.LocalDate;

public record CreateTaskRequest(
  String title,
  String description,
  LocalDate dueDate,
  TaskPriority priority
) {

}
