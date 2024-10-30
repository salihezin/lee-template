const express = require('express');
const {PrismaClient} = require('@prisma/client');
const cors = require('cors');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json())

console.log('time: ', new Date().toISOString());

// Users
app.get('/api/users', async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            UserDetail: true,
            Session: true,
            Post: true,
            UserRoles: {
                include: {
                    role: true,
                }
            },
            Role: true,
        }
    });
    res.json(users);
});

app.get('/api/users/:id', async (req, res) => {
    const {id} = req.params;
    const user = await prisma.user.findUnique({where: {id: Number(id)}});
    res.json(user);
});

app.post('/api/users', async (req, res) => {
    const {email, password} = req.body;
    const cryptedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({data: {email, password: cryptedPassword}});
    res.json(user);
});

app.put('/api/users/:id', async (req, res) => {
    const {id} = req.params;
    const {email, password} = req.body;
    const cryptedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.update({where: {id: Number(id)}, data: {email, password: cryptedPassword}});
    res.json(user);
});

app.delete('/api/users/:id', async (req, res) => {
    const {id} = req.params;
    const user = await prisma.user.delete({where: {id: Number(id)}});
    res.json(user);
});

// Session
app.get('/api/session', async (req, res) => {
    const sessions = await prisma.session.findMany();
    res.json(sessions);
});

app.get('/api/session/:id', async (req, res) => {
    const {id} = req.params;
    const session = await prisma.session.findUnique({where: {id: Number(id)}});
    res.json(session);
});

app.post('/api/session', async (req, res) => {
    const {user_id, expires} = req.body;
    const session = await prisma.session.create({data: {user_id, expires}});
    res.json(session);
});

app.put('/api/session/:id', async (req, res) => {
    const {id} = req.params;
    const {user_id, expires} = req.body;
    const session = await prisma.session.update({where: {id: Number(id)}, data: {user_id, expires}});
    res.json(session);
});

app.delete('/api/session/:id', async (req, res) => {
    const {id} = req.params;
    const session = await prisma.session.delete({where: {id: Number(id)}});
    res.json(session);
});

// get userPosts

// UserDetails
app.get('/api/user-details', async (req, res) => {
    const userDetails = await prisma.userDetail.findMany();
    res.json(userDetails);
});

app.get('/api/user-details/:id', async (req, res) => {
    const {id} = req.params;
    const userDetails = await prisma.userDetail.findMany({where: {userId: Number(id)}});
    res.json(userDetails);
});

app.post('/api/user-details', async (req, res) => {
    const {userId, firstName, lastName, createdAt, updatedAt, profilePhoto} = req.body;
    const userDetails = await prisma.userDetail.create({
        data: {
            userId,
            firstName,
            lastName,
            createdAt,
            updatedAt,
            profilePhoto
        }
    });
    res.json(userDetails);
});

app.put('/api/user-details/:id', async (req, res) => {
    const {id} = req.params;
    const {userId, firstName, lastName, createdAt, updatedAt, profilePhoto} = req.body;
    const userDetails = await prisma.userDetail.update({
        where: {id: Number(id)},
        data: {userId, firstName, lastName, createdAt, updatedAt, profilePhoto}
    });
    res.json(userDetails);
});

app.delete('/api/user-details/:id', async (req, res) => {
    const {id} = req.params;
    const userDetails = await prisma.userDetail.delete({where: {id: Number(id)}});
    res.json(userDetails);
});

// Posts
app.get('/api/posts', async (req, res) => {
    const posts = await prisma.post.findMany({
        include: {
            author: {
                include: {
                    UserDetail: true
                }
            },
            categories: true,
            PostMedia: true
        }
    });
    res.json(posts);
});

app.get('/api/posts/:id', async (req, res) => {
    const {id} = req.params;
    const post = await prisma.post.findUnique({where: {id: Number(id)}});
    res.json(post);
});

app.post('/api/posts', async (req, res) => {
    const {title, content, isPublished, authorId} = req.body;
    const post = await prisma.post.create({data: {title, content, isPublished, authorId}});
    res.json(post);
});

app.put('/api/posts/:id', async (req, res) => {
    const {id} = req.params;
    const {title, content, user_id} = req.body;
    const post = await prisma.post.update({where: {id: Number(id)}, data: {title, content, user_id}});
    res.json(post);
});

app.delete('/api/posts/:id', async (req, res) => {
    const {id} = req.params;
    const post = await prisma.post.delete({where: {id: Number(id)}});
    res.json(post);
});

// PostCategories
app.get('/api/post-categories', async (req, res) => {
    const postCategories = await prisma.postCategory.findMany();
    res.json(postCategories);
});

app.get('/api/post-categories/:id', async (req, res) => {
    const {id} = req.params;
    const postCategory = await prisma.postCategory.findUnique({where: {id: Number(id)}});
    res.json(postCategory);
});

app.post('/api/post-categories', async (req, res) => {
    const {name} = req.body;
    const postCategory = await prisma.postCategory.create({data: {name}});
    res.json(postCategory);
});

app.put('/api/post-categories/:id', async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const postCategory = await prisma.postCategory.update({where: {id: Number(id)}, data: {name}});
    res.json(postCategory);
});

app.delete('/api/post-categories/:id', async (req, res) => {
    const {id} = req.params;
    const postCategory = await prisma.postCategory.delete({where: {id: Number(id)}});
    res.json(postCategory);
});

// PostMedias
app.get('/api/post-medias', async (req, res) => {
    const postMedias = await prisma.postMedia.findMany();
    res.json(postMedias);
});

app.get('/api/post-medias/:id', async (req, res) => {
    const {id} = req.params;
    const postMedia = await prisma.postMedia.findUnique({where: {id: Number(id)}});
    res.json(postMedia);
});

app.post('/api/post-medias', async (req, res) => {
    const {post_id, media_url} = req.body;
    const postMedia = await prisma.postMedia.create({data: {post_id, media_url}});
    res.json(postMedia);
});

app.put('/api/post-medias/:id', async (req, res) => {
    const {id} = req.params;
    const {post_id, media_url} = req.body;
    const postMedia = await prisma.postMedia.update({where: {id: Number(id)}, data: {post_id, media_url}});
    res.json(postMedia);
});

app.delete('/api/post-medias/:id', async (req, res) => {
    const {id} = req.params;
    const postMedia = await prisma.postMedia.delete({where: {id: Number(id)}});
    res.json(postMedia);
});

// NavbarMenus
app.get('/api/navbar-menus', async (req, res) => {
    const navbarMenus = await prisma.navbarMenu.findMany({
        include: {
            children: true
        }
    });
    res.json(navbarMenus);
});

app.get('/api/navbar-menus/:id', async (req, res) => {
    const {id} = req.params;
    const navbarMenu = await prisma.navbarMenu.findUnique({where: {id: Number(id)}});
    res.json(navbarMenu);
});

app.post('/api/navbar-menus', async (req, res) => {
    let {title, url, icon, sortOrder, mainMenu, isActive, parentId} = req.body;
    icon = icon || '';
    sortOrder = sortOrder || 0;
    mainMenu = mainMenu || false;
    isActive = isActive || true;
    parentId = parentId || null;
    const navbarMenu = await prisma.navbarMenu.create({
        data: {
            title,
            url,
            icon,
            sortOrder,
            mainMenu,
            isActive,
            parentId
        }
    });
    res.json(navbarMenu);
});

app.put('/api/navbar-menus/bulk', async (req, res) => {
    try {
        const updatePromises = req.body?.map(menu => {
            return prisma.navbarMenu.update({
                where: { id: menu.id },
                data: { sortOrder: menu.sortOrder }
            });
        });

        await Promise.all(updatePromises);
        res.status(200).json({ message: 'Tüm menüler güncellendi.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Menü güncellenirken hata oluştu.' });
    }
});

app.put('/api/navbar-menus/:id', async (req, res) => {
    const {id} = req.params;
    let {title, url, icon, sortOrder, mainMenu, isActive, parentId} = req.body;
    icon = icon || '';
    sortOrder = sortOrder || 0;
    mainMenu = mainMenu || false;
    isActive = isActive || true;
    parentId = parentId || null;

    const navbarMenu = await prisma.navbarMenu.update({
        where: {
            id: Number(id)
        },
        data: {title, url, icon, sortOrder, mainMenu, isActive, parentId}
    });
    res.json(navbarMenu);
});

app.delete('/api/navbar-menus/:id', async (req, res) => {
    const {id} = req.params;
    const navbarMenu = await prisma.navbarMenu.delete({where: {id: Number(id)}});
    res.json(navbarMenu);
});

// Roles
app.get('/api/roles', async (req, res) => {
    const roles = await prisma.role.findMany();
    res.json(roles);
});

app.get('/api/roles/:id', async (req, res) => {
    const {id} = req.params;
    const role = await prisma.role.findUnique({where: {id: Number(id)}});
    res.json(role);
});

app.post('/api/roles', async (req, res) => {
    const {name, description} = req.body;
    const role = await prisma.role.create({data: {name, description}});
    res.json(role);
});

app.put('/api/roles/:id', async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const role = await prisma.role.update({where: {id: Number(id)}, data: {name}});
    res.json(role);
});

app.delete('/api/roles/:id', async (req, res) => {
    const {id} = req.params;
    const role = await prisma.role.delete({where: {id: Number(id)}});
    res.json(role);
});

// Permissions
app.get('/api/permissions', async (req, res) => {
    const permissions = await prisma.permission.findMany();
    res.json(permissions);
});

app.get('/api/permissions/:id', async (req, res) => {
    const {id} = req.params;
    const permission = await prisma.permission.findUnique({where: {id: Number(id)}});
    res.json(permission);
});

app.post('/api/permissions', async (req, res) => {
    const {name, description} = req.body;
    const permission = await prisma.permission.create({data: {name, description}});
    res.json(permission);
});

app.put('/api/permissions/:id', async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const permission = await prisma.permission.update({where: {id: Number(id)}, data: {name}});
    res.json(permission);
});

app.delete('/api/permissions/:id', async (req, res) => {
    const {id} = req.params;
    const permission = await prisma.permission.delete({where: {id: Number(id)}});
    res.json(permission);
});

// RolePermissions
app.get('/api/role-permissions', async (req, res) => {
    const rolePermissions = await prisma.rolePermission.findMany();
    res.json(rolePermissions);
});

app.get('/api/role-permissions/:id', async (req, res) => {
    const {id} = req.params;
    const rolePermission = await prisma.rolePermission.findUnique({where: {id: Number(id)}});
    res.json(rolePermission);
});

app.post('/api/role-permissions', async (req, res) => {
    const {roleId, permissionId} = req.body;
    const rolePermission = await prisma.rolePermission.create({
        data: {
            role: {connect: {id: roleId}},
            permission: {connect: {id: permissionId}}
        }
    });
    res.json(rolePermission);
});

app.put('/api/role-permissions/:id', async (req, res) => {
    const {id} = req.params;
    const {role_id, permission_id} = req.body;
    const rolePermission = await prisma.rolePermission.update({
        where: {id: Number(id)},
        data: {role_id, permission_id}
    });
    res.json(rolePermission);
});

app.delete('/api/role-permissions/:id', async (req, res) => {
    const {id} = req.params;
    const rolePermission = await prisma.rolePermission.delete({where: {id: Number(id)}});
    res.json(rolePermission);
});

// UserRoles
app.get('/api/user-roles', async (req, res) => {
    const userRoles = await prisma.userRoles.findMany({
        include: {
            user: true,
            role: true
        }
    });
    res.json(userRoles);
});

app.get('/api/user-roles/:id', async (req, res) => {
    const {id} = req.params;
    const userRole = await prisma.userRoles.findUnique({where: {id: Number(id)}});
    res.json(userRole);
});

app.post('/api/user-roles', async (req, res) => {
    const {userId, roleId} = req.body;
    const userRole = await prisma.userRoles.create({data: {userId, roleId}});
    res.json(userRole);
});

app.put('/api/user-roles/:id', async (req, res) => {
    const {id} = req.params;
    const {userId, roleId} = req.body;
    const userRole = await prisma.userRoles.update({where: {id: Number(id)}, data: {userId, roleId}});
    res.json(userRole);
});

app.delete('/api/user-roles/:id', async (req, res) => {
    const {id} = req.params;
    const userRole = await prisma.userRoles.delete({where: {id: Number(id)}});
    res.json(userRole);
});

// UserPermissions
app.get('/api/user-permissions', async (req, res) => {
    const userPermissions = await prisma.userPermission.findMany();
    res.json(userPermissions);
});

app.get('/api/user-permissions/:id', async (req, res) => {
    const {id} = req.params;
    const userPermission = await prisma.userPermission.findUnique({where: {id: Number(id)}});
    res.json(userPermission);
});

app.post('/api/user-permissions', async (req, res) => {
    const {user_id, permission_id} = req.body;
    const userPermission = await prisma.userPermission.create({data: {user_id, permission_id}});
    res.json(userPermission);
});

app.put('/api/user-permissions/:id', async (req, res) => {
    const {id} = req.params;
    const {user_id, permission_id} = req.body;
    const userPermission = await prisma.userPermission.update({
        where: {id: Number(id)},
        data: {user_id, permission_id}
    });
    res.json(userPermission);
});

app.delete('/api/user-permissions/:id', async (req, res) => {
    const {id} = req.params;
    const userPermission = await prisma.userPermission.delete({where: {id: Number(id)}});
    res.json(userPermission);
});

// Carousel
app.get('/api/carousel', async (req, res) => {
    const carousel = await prisma.carousel.findMany();
    res.json(carousel);
});

app.get('/api/carousel/:id', async (req, res) => {
    const {id} = req.params;
    const carousel = await prisma.carousel.findUnique({where: {id: Number(id)}});
    res.json(carousel);
});

app.post('/api/carousel', async (req, res) => {
    const {title, description, image, sortOrder, isActive,} = req.body;
    const carousel = await prisma.carousel.create({data: {title, description, image, sortOrder, isActive}});
    res.json(carousel);
});

app.put('/api/carousel/:id', async (req, res) => {
    const {id} = req.params;
    let {title, description, image, sortOrder, isActive} = req.body;
    const carousel = await prisma.carousel.update({
        where: {id: Number(id)},
        data: {title, description, image, sortOrder, isActive, updatedAt: new Date().toISOString()}
    });
    res.json(carousel);
});

app.delete('/api/carousel/:id', async (req, res) => {
    const {id} = req.params;
    const carousel = await prisma.carousel.delete({where: {id: Number(id)}});
    res.json(carousel);
});


app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

