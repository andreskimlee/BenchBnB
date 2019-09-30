import { connect } from "react-redux"
import { login } from '../../actions/session_actions'
import SessionForm from './SessionForm'

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "Log In"

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)