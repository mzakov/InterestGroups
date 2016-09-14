package com.cooksys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.AppCity;
import com.cooksys.entity.AppGroup;
import com.cooksys.entity.AppPerson;
import com.cooksys.entity.AppState;
import com.cooksys.repository.CityRepository;
import com.cooksys.repository.GroupsRepository;
import com.cooksys.repository.PersonRepository;
import com.cooksys.service.interfaces.CityService;

@Service
public class CityServiceImpl implements CityService {

	private final CityRepository cityRepo;
	private final PersonRepository pplRepo;
	private final GroupsRepository groupsRepo;
	
	@Autowired
	public CityServiceImpl(CityRepository cityRepo, PersonRepository pplRepo, GroupsRepository groupsRepo) {
		super();
		this.cityRepo = cityRepo;
		this.pplRepo = pplRepo;
		this.groupsRepo = groupsRepo;
	}

	// GET /api/cities
	@Override
	public List<AppCity> index() {
		return cityRepo.findAll();
	}

	// POST /api/cities
	@Override
	public AppCity create(AppCity city) {
	return cityRepo.save(city);
	}

	// GET /api/cities/{id}
	@Override
	public AppCity read(long id) {
		return cityRepo.findOne(id);
	}

	// PATCH /api/cities/{id}
	@Override
	public AppCity update(long id, AppCity cityToUpdate) {
		cityToUpdate.setId(id);
		return cityRepo.save(cityToUpdate);
	}

	// DELETE /api/cities/{id}
	@Override
	public AppCity delete(long id) {
		AppCity result = this.read(id);
		cityRepo.delete(id);
		return result;
	}

	// GET /api/cities/{id}/state
	@Override
	public AppState readState(long id) {
		AppState state = this.read(id).getState();
		return state;
	}

	// PUT /api/cities/{id}/state
	@Override
	public AppCity updateState(long id, AppState stateToPut) {
		AppCity result = this.read(id);
		result.setState(stateToPut);
		return result;
	}

	// GET /api/cities/{id}/people
	@Override
	public List<AppPerson> indexPeople(long id) {
		return pplRepo.findAllByCity_id(id);
	}

	// GET /api/cities/{id}/groups
	@Override
	public List<AppGroup> indexGroups(long id) {
		return groupsRepo.findAllByCity_id(id);
	}
}
