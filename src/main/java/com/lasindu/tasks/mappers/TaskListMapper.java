package com.lasindu.tasks.mappers;

import com.lasindu.tasks.domain.dto.TaskListDto;
import com.lasindu.tasks.domain.entities.TaskList;

public interface TaskListMapper {

    TaskList fromDto(TaskListDto taskListDto);

    TaskListDto toDto(TaskList tasklist);

}
