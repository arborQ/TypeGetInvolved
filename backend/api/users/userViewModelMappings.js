export var modelToViewModel = (model) => {
  return { 
            login: model.login, 
            email: model.email, 
            firstName: model.firstName, 
            lastName: model.lastName, 
            id: model._id 
          };
};
export var viewModelToModel = (viewModel, model) => {
    var newModel = { 
            login: viewModel.login, 
            email: viewModel.email, 
            firstName: viewModel.firstName, 
            lastName: viewModel.lastName
          };

    return Object.assign({}, model || { }, newModel);
};