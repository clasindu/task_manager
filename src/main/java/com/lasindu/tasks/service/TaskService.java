package com.lasindu.tasks.service;

import com.lasindu.tasks.domain.CreateTaskRequest;
import com.lasindu.tasks.domain.UpdateTaskRequest;
import com.lasindu.tasks.domain.entity.Task;
import java.util.List;
import java.util.UUID;

public interface TaskService {

  Task createTask(CreateTaskRequest request);

  List<Task> listTasks();

  Task updateTask(UUID taskId, UpdateTaskRequest request);

  void deleteTask(UUID taskId);

}
