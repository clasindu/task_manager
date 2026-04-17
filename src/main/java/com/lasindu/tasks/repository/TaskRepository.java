package com.lasindu.tasks.repository;

import com.lasindu.tasks.domain.entity.Task;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {

}
