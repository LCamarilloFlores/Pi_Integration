import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useRoutingHook() {
  const [formError, setformError] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  return [dispatch, location, navigate, formError, setformError];
}
