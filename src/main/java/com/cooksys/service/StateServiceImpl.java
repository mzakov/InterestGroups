package com.cooksys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.AppCity;
import com.cooksys.entity.AppState;
import com.cooksys.repository.CityRepository;
import com.cooksys.repository.StateRepository;
import com.cooksys.service.interfaces.StateService;

@Service
public class StateServiceImpl implements StateService {

	@Autowired
	StateRepository stateRepo;

	@Autowired
	CityRepository cityRepo;

	// GET /api/states
	@Override
	public List<AppState> index() {
		return stateRepo.findAll();
	}

	// POST /api/states
	@Override
	public AppState create(AppState state) {
		return stateRepo.save(state);
	}

	// GET /api/states/{id}
	@Override
	public AppState read(long id) {
		return stateRepo.findOne(id);
	}

	// PATCH /api/states/{id}
	@Override
	public AppState update(long id, AppState stateToUpdate) {
		stateToUpdate.setId(id);
		return stateRepo.save(stateToUpdate);
	}

	// DELETE /api/states/{id}
	@Override
	public AppState delete(long id) {
		AppState result = this.read(id);
		cityRepo.delete(id);
		return result;
	}

	// GET /api/states/{id}/cities
	@Override
	public List<AppCity> indexCities(long id) {
		return cityRepo.findAllByState_id(id);
	}
}
