import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useRoutingHook() {
  const [formError, setformError] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const statistics = useSelector((state) => state.statistics);
  return [dispatch, statistics, location, navigate, formError, setformError];
}
