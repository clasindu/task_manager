package com.lasindu.tasks.mappers;

import com.lasindu.tasks.domain.dto.TaskDto;
import com.lasindu.tasks.domain.entities.Task;

public interface TaskMapper {

    Task fromDto(TaskDto taskDto);


    TaskDto toDto(Task task);

}
