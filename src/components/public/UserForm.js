import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserForm } from "../../hooks/Custom.hooks";
/**
 * Desde nuestro form, implentaremos nuestro CustomHook
 * useUserForm
 *Pero ala hora de usarlo lo desestructuraremos
 */
export const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();
  /**
   * areEquals se encargara de verificar Si las Passwords
   *son iguales
   passwordCOnfirmation se encargara de atrapar la clave
   */

  const [areEquals, setAreEquals] = useState(true);

  const [passwordConfirmation, setPasswordConfirmation] = useState(true);

  /**
   * Por Otro lado tendremos la funcion que manejara el
   * envio del formulario.HandleSubmit
   * dentrodel form,lo proxima ha hacer es ir agregando
   * name a todos los input,y un evento onChange
   * con nuestro handleChanges del hook
   */
  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  }

  useEffect(() => {
    const {password}= form;

    setAreEquals(password===passwordConfirmation);
  
  }, [passwordConfirmation]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Registrate!</h4>
      <form className="row g-3">
        <div className="col-md-12">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="you@example.com"
            name="email"
            onChange={handleChanges}
          />
        </div>
        <div className="col-md-12">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChanges}
          />
        </div>
        <div className="col-md-12">
          <label for="inputPassword4" className="form-label">
            Confirmar Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={handlePasswordConfirmation}
          />
          {
            !areEquals &&
            (<div className="form-text list-group-item-danger">
            Las Claves no son iguales
          </div>)
        }
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            onChange={handleChanges}
          />
        </div>

        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" 
          name="City"
          onChange={handleChanges}/>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" 
          name="zip"
          onChange={handleChanges}/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary"
          onClick={handleSubmit}>
            Registrarme
          </button>
          <button type="button" 
          className="btn btn-warning
          ">
            <Link to="/" className="nav-link">
              volver
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

//export default UserForm
