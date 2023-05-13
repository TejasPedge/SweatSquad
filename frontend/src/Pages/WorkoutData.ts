import forearms from "../Assets/foreamrs-transformed.jpeg"
import gluteworkout from "../Assets/glute_workout.jpeg"
import lats from "../Assets/lats.jpeg"
import hamstring from "../Assets/hamstring.jpeg"
interface Target {
    target: string;
    img: any;
}

export const target_muscles: Array<Target> = [

    { target: 'abductors', img: 'https://images.pexels.com/photos/327253/pexels-photo-327253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { target: 'abs', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },

    { target: 'adductors', img: 'https://images.unsplash.com/photo-1591469933822-57c71792bbd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },

    { target: 'biceps', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },

    { target: 'calves', img: 'https://images.unsplash.com/photo-1600881333167-dbb33a5dcfda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },

    { target: 'cardio', img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { target: 'delts', img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },

    { target: 'forearms', img: forearms },

    { target: 'glutes', img: gluteworkout },

    { target: 'hamstrings', img: hamstring },

    { target: 'lats', img: "https://images.pexels.com/photos/4047102/pexels-photo-4047102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

    { target: 'levator scapulae', img: 'https://images.unsplash.com/photo-1591258370814-01609b341790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },

    { target: 'pectorals', img: 'https://images.pexels.com/photos/5327464/pexels-photo-5327464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { target: 'quads', img: 'https://images.unsplash.com/photo-1584952449180-f8fddc0b03a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },

    { target: 'serratus anterior', img: 'https://images.pexels.com/photos/6551055/pexels-photo-6551055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { target: 'spine', img: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { target: 'traps', img: 'https://images.pexels.com/photos/4164759/pexels-photo-4164759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },

    { target: 'triceps', img: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },

    { target: 'upper back', img: lats },
]
